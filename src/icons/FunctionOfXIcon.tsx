import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FunctionOfXIcon({
  iconName = 'function-of-x',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
