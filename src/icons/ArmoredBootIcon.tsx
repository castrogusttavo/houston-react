import React from 'react'
import { Icon, IconProps } from '../Icon'

export function ArmoredBootIcon({
  iconName = 'armored-boot',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
