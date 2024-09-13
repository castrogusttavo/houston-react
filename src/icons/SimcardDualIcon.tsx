import React from 'react'
import { Icon, IconProps } from '../Icon'

export function SimcardDualIcon({
  iconName = 'simcard-dual',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
