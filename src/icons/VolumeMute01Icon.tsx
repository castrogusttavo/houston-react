import React from 'react'
import { Icon, IconProps } from '../Icon'

export function VolumeMute01Icon({
  iconName = 'volume-mute-01',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
