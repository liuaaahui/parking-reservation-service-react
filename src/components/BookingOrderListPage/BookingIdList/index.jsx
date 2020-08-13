import React from 'react'
import './index.scss'
import '../../../css/icon.css'
import axios from 'axios'
import { getOrder, loginTest, userLogin } from '../../../http/api'


class BookingIdList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orderList: []
        }
    }
    
    componentWillMount() {
      loginTest({
        "phoneNumber": "18710659057",
        "password": 123
      }).then(() =>{
        axios.defaults.withCredentials=true;
        getOrder(23).then(() => {
        })
      })
      
    }

    componentDidMount() {
      userLogin({
        phoneNumber: "13427560238",
        password: "123"
      }).then(() => {
        getOrder(23).then(() => {
        })
      })
    }

    render() {
        return (
          <div className="booking-id-list">
            <div className="title-text">
<span className="icon-booking" />
历史订单
            </div>
            {/* {idList.map((item, index) => (
              <div className="id-text" key={index}>
                <span className="icon-booking" />
                {item}
              </div>
))} */}
            <div className="booking-order-wrapper">
              <div className="parking-lot-msg-wrapper">
                <div className="parking-lot-name-wrapper">
                  <span className="parking-lot-name">xxx停车场</span>
                  <span className="parking-lot-address">xx省xx市xxx路</span>
                </div>
                <div className="price-wrapper">
                  <span className="price-text">9.0</span>
                  <span className="price-char">元</span>
                </div>
              </div>
              <div className="time-status-wrapper">
                <div className="time-wrapper">
                  <span className="month">2020-08-13</span>
                  <span className="time">16:32:23</span>
                </div>
                <div className="status-wrapper">
                  <span className="status">预约成功</span>
                </div>
              </div>
            </div>
          </div>
)
    }
}

export default BookingIdList