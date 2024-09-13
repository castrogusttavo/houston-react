import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CurvyRightDirectionIcon({
  iconName = 'curvy-right-direction',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
