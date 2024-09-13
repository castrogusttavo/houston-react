import React from 'react'
import { Icon, IconProps } from '../Icon'

export function GiveBloodIcon({
  iconName = 'give-blood',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
