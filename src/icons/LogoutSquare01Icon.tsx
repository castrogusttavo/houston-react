import React from 'react'
import { Icon, IconProps } from '../Icon'

export function LogoutSquare01Icon({
  iconName = 'logout-square-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
