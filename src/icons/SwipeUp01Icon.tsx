import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SwipeUp01Icon({
  iconName = 'swipe-up-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
