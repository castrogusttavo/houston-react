import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SaveMoneyPoundIcon({
  iconName = 'save-money-pound',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
