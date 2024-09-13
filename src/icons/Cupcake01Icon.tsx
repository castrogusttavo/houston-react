import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Cupcake01Icon({
  iconName = 'cupcake-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
