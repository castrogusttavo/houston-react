import React from 'react'
import { Icon, IconProps } from '../Icon'

export function UserStar01Icon({
  iconName = 'user-star-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
