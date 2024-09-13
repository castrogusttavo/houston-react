import React from 'react'
import { Icon, IconProps } from '../Icon'

export function XVariableIcon({
  iconName = 'x-variable',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
