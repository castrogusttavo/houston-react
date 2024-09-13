import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserMinus01Icon({
  iconName = 'user-minus-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
