# blade

Design System that powers Razorpay

# Installation

## React Native

### For react native >= 0.60.x (Autolink)

1. Add this to your package.json
   `"@razorpay/blade": "razorpay/blade.git#master"`
1. Run `yarn`
1. Create a file in your project root directory called `react-native.config.js` and add blade as an asset dependency to get all the fonts:

```
module.exports = {
  assets: ['@razorpay/blade'],
};
```

1. Run `npx react-native link`

### For react native <= 0.59.x

1. Add this to your package.json
   `"@razorpay/blade": "razorpay/blade.git#master"`
1. Run `yarn`
1. Run `npx react-native link @razorpay/blade`


### Additional Steps
1. For `react-native-gesture-handle` follow steps given [here](https://docs.swmansion.com/react-native-gesture-handler/docs/#bare-react-native).
2. For `react-native-linear-gradient` follow instructions for [android](https://www.npmjs.com/package/react-native-linear-gradient#android) and [ios](https://www.npmjs.com/package/react-native-linear-gradient#ios).
