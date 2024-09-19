import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SaveMoneyEuroIcon({
  iconName = 'save-money-euro',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
