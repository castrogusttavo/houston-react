import React from 'react'
import { Icon, IconProps } from '../Icon'

export function PlusMinus01Icon({
  iconName = 'plus-minus-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
