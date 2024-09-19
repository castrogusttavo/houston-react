import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SaveMoneyDollarIcon({
  iconName = 'save-money-dollar',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
