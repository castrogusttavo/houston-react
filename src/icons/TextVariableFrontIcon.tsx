import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TextVariableFrontIcon({
  iconName = 'text-variable-front',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
