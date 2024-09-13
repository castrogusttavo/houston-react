import React from 'react'
import { Icon, IconProps } from '../Icon'

export function Hamburger01Icon({
  iconName = 'hamburger-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
