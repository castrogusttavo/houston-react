import React from 'react'
import { Icon, IconProps } from '../Icon'

export function FunctionSquareIcon({
  iconName = 'function-square',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
