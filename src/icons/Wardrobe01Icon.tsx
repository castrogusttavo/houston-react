import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Wardrobe01Icon({
  iconName = 'wardrobe-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
