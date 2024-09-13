import React from 'react'
import { Icon, IconProps } from '../Icon'

export function HandBeaterIcon({
  iconName = 'hand-beater',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
