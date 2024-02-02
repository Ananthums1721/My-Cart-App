import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import LeftArrSVG from '../assets/svg/LeftArrSVG';
import ArrowRightSVG from '../assets/svg/ArrowRightSVG';
import DropDownSVG from '../assets/svg/DropDownSVG';
import LadySVG from '../assets/svg/LadySVG';
import TruckSVG from '../assets/svg/TruckSVG';

import {Typography, height, width} from '../styles';
import {TouchableOpacity} from 'react-native';

function CartScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <View style={styles.rowContainer}>
          <LeftArrSVG />
          <Text style={styles.myCartText}> My Cart</Text>
        </View>
        <View style={styles.placeOrderContainer}>
          <Text style={styles.placeOrderText}>PLACE ORDER</Text>
        </View>
      </View>
      <View style={styles.height10} />
      <View style={styles.secondContainer}>
        <View style={styles.deliverTextView}>
          <View style={styles.row1}>
            <Text style={styles.deliverText}>Deliver to:</Text>
            <Text style={styles.deliverTextBold}>Alrina Sharra, 299002</Text>
          </View>
          <Text style={styles.deliverText}>
            83 Chilten Street Marylabone, London W1U 6NF
          </Text>
        </View>
        <ArrowRightSVG />
      </View>
      <View style={styles.height10} />
      <View style={styles.height5} />
      <Text style={styles.cartText}>My Cart(2/2)</Text>
      <View style={styles.height5} />
      <View style={styles.thirdContainer}>
        <View style={styles.deliverTextView}>
          <View style={styles.row2}>
            <Text style={styles.subTotalText}>Subtotal</Text>
            <Text style={styles.amountText}>$ 81.40</Text>
          </View>
          <Text style={styles.deliverText}>2 Item selected for order</Text>
        </View>
        <ArrowRightSVG />
      </View>
      <View style={styles.height10} />
      <View style={styles.height5} />
      <View style={styles.fourthContainer}>
        <View style={styles.productView}>
          <LadySVG height={100} width={120} />
        </View>
        <View style={styles.productDetailsView}>
          <Text style={styles.productText}>
            Dressberry Silk Dress Red Colour
          </Text>
          <Text style={styles.productText}>UK/INDIA (Lourie Red Dress)</Text>
          <View style={styles.height5} />
          <View style={styles.subDetailContainerView}>
            <View style={styles.dropDownColoum}>
              <Text style={styles.sizeText}>Size.S </Text>
              <DropDownSVG height={15} width={15} marginLeft={5} />
            </View>
            <View style={styles.dropDownColoum}>
              <Text style={styles.sizeText}>Qty: 1 </Text>
              <DropDownSVG height={15} width={15} marginLeft={5} />
            </View>
          </View>
          <View style={styles.height10} />

          <View style={styles.row1}>
            <Text style={styles.deliverText}>Sold by :</Text>
            <Text style={styles.sizeText}>Ellementree Retails</Text>
          </View>
          <View style={styles.row1}>
            <Text style={styles.amountText}>$ 40.70 </Text>
            <Text style={styles.deliverText}> ''81.70''</Text>

            <Text style={styles.deliverText}> 50% off</Text>
          </View>
          <View style={styles.row1}>
            <TruckSVG height={20} width={20} />

            <Text style={styles.deliverText}>Delivery in </Text>
            <Text style={styles.dayText}>2 days</Text>
          </View>
        </View>
      </View>
      <View style={styles.fifthContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Save for Later</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.height10} />
      <View style={styles.height10} />

      <View style={styles.fourthContainer}>
        <View style={styles.productView}>
          <LadySVG height={100} width={120} />
        </View>
        <View style={styles.productDetailsView}>
          <Text style={styles.productText}>
            Dressberry Silk Dress Red Colour
          </Text>
          <Text style={styles.productText}>UK/INDIA (Lourie Red Dress)</Text>
          <View style={styles.height5} />
          <View style={styles.subDetailContainerView}>
            <View style={styles.dropDownColoum}>
              <Text style={styles.sizeText}>Size.S </Text>
              <DropDownSVG height={15} width={15} marginLeft={5} />
            </View>
            <View style={styles.dropDownColoum}>
              <Text style={styles.sizeText}>Qty: 1 </Text>
              <DropDownSVG height={15} width={15} marginLeft={5} />
            </View>
          </View>
          <View style={styles.height10} />

          <View style={styles.row1}>
            <Text style={styles.deliverText}>Sold by :</Text>
            <Text style={styles.sizeText}>Ellementree Retails</Text>
          </View>
          <View style={styles.row1}>
            <Text style={styles.amountText}>$ 40.70 </Text>
            <Text style={styles.deliverText}> ''81.70''</Text>

            <Text style={styles.deliverText}> 50% off</Text>
          </View>
          <View style={styles.row1}>
            <TruckSVG height={20} width={20} />
            <Text style={styles.deliverText}>Delivery in </Text>
            <Text style={styles.dayText}>2 days</Text>
          </View>
        </View>
      </View>
      <View style={styles.fifthContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Save for Later</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.height10} />
      <View style={styles.height10} />

      <Text style={styles.productRelatedText}>Product Related to cart</Text>
      <View style={styles.height10} />
      <View style={styles.height10} />
      <View style={styles.fourthContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
  },
  firstContainer: {
    height: height * 0.06,
    width: width * 1,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  secondContainer: {
    height: height * 0.06,
    width: width * 1,
    backgroundColor: 'white',
    padding: 7,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 17,
  },
  myCartText: {
    ...Typography.mediumTextBold,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  placeOrderContainer: {
    height: height * 0.035,
    width: width * 0.35,
    backgroundColor: '#853bbf',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeOrderText: {
    ...Typography.smallTextBold,
    color: 'white',
    fontWeight: 'bold',
  },
  height10: {
    height: 10,
  },
  height5: {
    height: 5,
  },
  deliverTextView: {
    height: height * 0.055,
    width: width * 0.75,
  },
  row1: {
    flexDirection: 'row',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliverText: {
    ...Typography.extraSmallTextRegular,
    color: '#747474',
    marginRight: 5,
  },
  deliverTextBold: {
    ...Typography.extraSmallTextBold,
    color: 'black',
  },
  amountText: {
    ...Typography.extraSmallTextBold,
    color: '#853bbf',
    fontWeight: 'bold',
  },
  sizeText: {
    ...Typography.extraSmallTextBold,
    color: 'black',
    fontWeight: 'bold',
  },
  cartText: {
    ...Typography.mediumTextBold,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  thirdContainer: {
    height: height * 0.06,
    width: width * 0.95,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 3,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  subTotalText: {
    ...Typography.smallTextSemiBold,
    fontWeight: 'bold',
    marginRight: 5,
  },
  fourthContainer: {
    height: height * 0.21,
    width: width * 0.95,
    marginHorizontal: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 3,
    padding: 15,
  },
  productView: {
    height: height * 0.12,
    width: width * 0.23,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productDetailsView: {
    height: height * 0.2,
    width: width * 0.6,
    marginLeft: 15,
  },
  productText: {
    color: '#747474',
  },
  subDetailContainerView: {
    height: height * 0.045,
    width: width * 0.57,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dropDownColoum: {
    height: height * 0.045,
    width: width * 0.2,
    borderWidth: 0.4,
    borderColor: '#747474',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  dayText: {
    ...Typography.extraSmallTextRegular,
    color: 'green',
  },
  buttonContainer: {
    height: height * 0.04,
    width: width * 0.4,
    borderWidth: 1,
    borderColor: '#853bbf',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fifthContainer: {
    height: height * 0.08,
    width: width * 0.95,
    marginHorizontal: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 13,
  },
  buttonText: {
    ...Typography.smallTextBold,
    color: '#853bbf',
    fontWeight: 'bold',
  },
  productRelatedText: {
    ...Typography.mediumTextBold,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default CartScreen;
