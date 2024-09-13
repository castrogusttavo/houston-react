import React from 'react'
import { Icon, IconProps } from '../Icon'

export function CurvyLeftDirectionIcon({
  iconName = 'curvy-left-direction',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
