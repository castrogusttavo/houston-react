import React from 'react'
import { Icon, IconProps } from '../Icon'

export function BaseballBatIcon({
  iconName = 'baseball-bat',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
