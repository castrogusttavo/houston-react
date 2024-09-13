import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MinusPlus01Icon({
  iconName = 'minus-plus-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
