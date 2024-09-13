import React from 'react'
import { Icon, IconProps } from '../Icon'

export function MirroringScreenIcon({
  iconName = 'mirroring-screen',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
