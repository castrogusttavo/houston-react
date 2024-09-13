import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PrawnIcon({ iconName = 'prawn', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
