import React from 'react'
import { Icon, IconProps } from '../Icon'

export function TennisBallIcon({
  iconName = 'tennis-ball',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
