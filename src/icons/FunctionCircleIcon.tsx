import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FunctionCircleIcon({
  iconName = 'function-circle',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
