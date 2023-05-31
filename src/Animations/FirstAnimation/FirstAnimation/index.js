import React from 'react'
import LottieAnimation from '../../LottieAnimations/index'
import { lottieFood } from '../../LottieAnimations/lottieData';

const Food = () => {
  return (
    <LottieAnimation file={lottieFood} width='350px' height='350px'/>
  )
}

export default Food;