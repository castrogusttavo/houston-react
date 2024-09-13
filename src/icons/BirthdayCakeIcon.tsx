import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BirthdayCakeIcon({
  iconName = 'birthday-cake',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
