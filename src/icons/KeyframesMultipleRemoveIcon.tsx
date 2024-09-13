import React from 'react'
import { Icon, IconProps } from '../Icon'

export function KeyframesMultipleRemoveIcon({
  iconName = 'keyframes-multiple-remove',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
