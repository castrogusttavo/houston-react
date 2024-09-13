import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Shirt01Icon({ iconName = 'shirt-01', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
