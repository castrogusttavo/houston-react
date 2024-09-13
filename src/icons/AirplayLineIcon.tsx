import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AirplayLineIcon({
  iconName = 'airplay-line',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
