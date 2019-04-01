import React, {Component, Fragment} from 'react';
import TodoItem from './ToDoItem'

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: [],
            inputValue: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleBtnClick = this.handleBtnClick.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }


    handleDelete(index) {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState({list})
    }

    getTodoItems() {
        return (
            this.state.list.map((item, index) => {
                return (
                    <TodoItem
                        delete={this.handleDelete}
                        key={index}
                        content={item}
                        index={index}/>
                )
            })
        )
    }

    // 父组件通过属性的形式向子组件传递参数
    // 子组件通过props接收父组件传递过来的参数
    render() {
        // jsx 语法
        return (
            <Fragment>
                <div>
                    <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/>
                    <button className='red-btn' onClick={this.handleBtnClick}>add</button>
                </div>
                <ul>{this.getTodoItems()}</ul>
            </Fragment>
        );
    }
}

export default App;
