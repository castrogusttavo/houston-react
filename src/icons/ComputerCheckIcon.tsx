import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ComputerCheckIcon({
  iconName = 'computer-check',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
