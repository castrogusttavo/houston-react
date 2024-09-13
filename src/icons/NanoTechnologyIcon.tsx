import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NanoTechnologyIcon({
  iconName = 'nano-technology',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
