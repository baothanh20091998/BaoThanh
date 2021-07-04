import React, { Component } from 'react'

export default class DemoListAndKeys extends Component {
    state = {
        listFriend: [
            {
                id: "1",
                name: "Hoàng Lê Bảo Thành",
                age: "23",
            },
            {
                id: "2",
                name: "Trần Thúy Hà",
                age: "24",
            },
            {
                id: "3",
                name: "Bin",
                age: "23",
            },
        ]
    }

    renderListFriend = () => {
        const listFriend = this.state.listFriend;
        return listFriend.map((friend, index) => {
            return (<tr key={index}>
                <td>{friend.id}</td>
                <td>{friend.name}</td>
                <td>{friend.age}</td>
            </tr>)
        })
    }

    render() {
        return (
            <div>
                <h1>DemoListAndKeys</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderListFriend()}
                    </tbody>
                </table>
            </div>
        )
    }
}
