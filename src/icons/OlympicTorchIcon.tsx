import React from 'react'
import { Icon, IconProps } from '../Icon'

export function OlympicTorchIcon({
  iconName = 'olympic-torch',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
