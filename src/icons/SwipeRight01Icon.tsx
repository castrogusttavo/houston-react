import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SwipeRight01Icon({
  iconName = 'swipe-right-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
