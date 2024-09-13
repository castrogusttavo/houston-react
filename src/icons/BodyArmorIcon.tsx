import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BodyArmorIcon({
  iconName = 'body-armor',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
