import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserAdd01Icon({
  iconName = 'user-add-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
