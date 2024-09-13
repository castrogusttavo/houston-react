import React from 'react'
import { Icon, IconProps } from '../Icon'

export function AdobeXdIcon({ iconName = 'adobe-xd', ...props }: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
