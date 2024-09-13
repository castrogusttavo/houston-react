import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LottiefilesIcon({
  iconName = 'lottiefiles',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
