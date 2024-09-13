import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserBlock01Icon({
  iconName = 'user-block-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
