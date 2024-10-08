import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SaveMoneyYenIcon({
  iconName = 'save-money-yen',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
