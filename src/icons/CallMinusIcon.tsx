import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CallMinusIcon({
  iconName = 'call-minus',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
