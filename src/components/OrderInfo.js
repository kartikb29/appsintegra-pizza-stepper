import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card} from 'react-bootstrap';
import FlavourInfo from './FlavourInfo';

class OrderInfo extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const numberOfFlavours = Number(this.props.settings.numberOfFlavours) + 1;
    const flavourSliceCount = (this.props.sliceStore.flavourSliceCount).slice(1, numberOfFlavours);
    const slicePerPizza = Number(this.props.settings.numberOfSlices);
    const flavourList = flavourSliceCount.map((data, index) => {
      const pizzaValue = Math.floor(data / slicePerPizza);
      const slicesValue = data % slicePerPizza;
      return (
        <FlavourInfo
          pizzaValue={pizzaValue}
          slicesValue={slicesValue}
          index={index}
          key={index}>
        </FlavourInfo>
      );
    });
    const totalSlices = this.props.sliceStore.totalSlices;
    return (
      <div>
        <h3>Order Info</h3>
        <Card>
          <Card.Header as="h5">Total Slices: {totalSlices}</Card.Header>
          <p></p>
          <div className="row justify-content-center">
            {flavourList}
          </div>
          <p></p>
        </Card>
        <p></p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    settings: state.settings,
    sliceStore: state.sliceStore,
  };
}

export default connect(mapStateToProps)(OrderInfo);
