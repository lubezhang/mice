import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        let { onSelect } = this.props;
        onSelect({
            currentPage: 1,
            numsPerPage: 10
        });
    }

    handleClick(pageNum){
        let { items, activePage, onSelect } = this.props;
        if(pageNum !== activePage && pageNum !== 0){
            console.log("pageNum:", pageNum);
            onSelect({
                currentPage: pageNum,
                numsPerPage: 10
            })
        }
    }

    renderPrev(){
        let { activePage } = this.props, pageNum = activePage - 1;
        return (
            <li key={pageNum}>
              <a aria-label="Previous" onClick={this.handleClick.bind(this, pageNum)}>
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
        );
    }

    renderNext(){
        let { items, activePage } = this.props, pageNum = activePage >= items?activePage : activePage + 1;
        return (
            <li key={pageNum}>
              <a aria-label="Previous" onClick={this.handleClick.bind(this, pageNum)}>
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
        );
    }

    renderPageButtons(){
        let buttons = [], startPage, endPage, 
            { items, activePage, maxButtons, boundaryLinks } = this.props,
            hasHiddenPagesAfter = startPage + maxButtons <= items;

        // 计算分页组件的开始页码、结束页码
        if (maxButtons) {
            let hiddenPagesBefore = activePage - parseInt(maxButtons / 2, 10);
            startPage = hiddenPagesBefore > 1 ? hiddenPagesBefore : 1;
            hasHiddenPagesAfter = startPage + maxButtons <= items;

            if (!hasHiddenPagesAfter) {
                endPage = items;
                startPage = items - maxButtons + 1;
                if (startPage < 1) {
                    startPage = 1;
                }
            } else {
                endPage = startPage + maxButtons - 1;
            }
        } else {
            startPage = 1;
            endPage = items;
        }

        // 输出分页组件的页码列表
        for(let pageNum = startPage; pageNum <= endPage; pageNum++) {
            buttons.push(
                <li key={pageNum} className={pageNum == activePage ? "active" : ""} >
                    <a onClick={this.handleClick.bind(this, pageNum)}>{pageNum}</a>
                </li>
            );
        }

        // 
        if(startPage > 2){
            buttons.unshift(
                <li key="0">
                    <a href="javascript:void(0)">...</a>
                </li>
            );
        }

        if(startPage !== 1){
            buttons.unshift(
                <li key="1" >
                    <a onClick={this.handleClick.bind(this, 1)}>1</a>
                </li>
            );
        }


        // 如果页码列表没有全部显示，则增加更多页码占位符
        // debugger; 
        if((items - endPage > 1)) {
            buttons.push(
                <li key={items + 1}>
                    <a href="javascript:void(0)">...</a>
                </li>
            );
        }

        if((items - endPage !== 0)) {
            buttons.push(
                <li key={items} >
                    <a onClick={this.handleClick.bind(this, items)}>{items}</a>
                </li>
            );
        }

        
        return buttons;
    }

    render(){
        return (
            <nav>
              <ul className="pagination">
                { this.renderPrev() }
                { this.renderPageButtons() }
                { this.renderNext() }
              </ul>
            </nav>
        )
    }
}

Pagination.defaultProps = {
    activePage: 1,
    items: 1,
    maxButtons: 0,
    first: false,
    last: false,
    prev: false,
    next: false,
    ellipsis: true,
    boundaryLinks: false,
    // buttonComponentClass: SafeAnchor,
    bsClass: 'pagination'
}

export default Pagination;