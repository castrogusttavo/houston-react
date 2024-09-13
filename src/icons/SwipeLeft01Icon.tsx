import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SwipeLeft01Icon({
  iconName = 'swipe-left-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
