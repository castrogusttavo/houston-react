import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserRemove01Icon({
  iconName = 'user-remove-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
